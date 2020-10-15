import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarKerImg from '../images/map-marker.svg';

import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';


function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState([]);

  console.log(orphanages);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarKerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Ilha de Santiago</strong>
          <span>Cidade da Praia</span>
        </footer>
      </aside>

      <Map 
        center={[14.9364883,-23.5242391]}
        zoom={14}
        style={{ width: '100%', height: '100%'}}
      >
        {/* {<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />} */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />

        <Marker
        icon={mapIcon}
          position={[14.9364883,-23.5242391]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Fundação Pantera
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;