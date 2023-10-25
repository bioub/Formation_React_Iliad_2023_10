import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet';

function Carte() {
  const [adresse, setAdresse] = useState('Paris');
  const [coords, setCoords] = useState([48.859, 2.347]);

  function handleChange(event) {
    setAdresse(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://api-adresse.data.gouv.fr/search/?q=' + encodeURIComponent(adresse))
      .then((res) => res.json())
      .then((data) => {
        const [lng, lat] = data.features[0].geometry.coordinates;
        setCoords([lat, lng]);
      });
  }

  return (
    <div className="Carte">
      <form onSubmit={handleSubmit}>
        Adresse :
        <input type="text" value={adresse} onChange={handleChange} />
        <button>Go</button>
      </form>
      <MapContainer center={coords} zoom={13} scrollWheelZoom={false} style={{width: 600, height: 400}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>{adresse}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Carte;
