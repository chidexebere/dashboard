import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Card from '../../Card';
import './style.css';

interface Props {
  product: ProductObject;
}

const Map = ({ product }: Props) => {
  const { company } = product;
  const { address } = company;
  const { house, street, city, country, latitude, longitude } = address;

  const position: [number, number] = [Number(latitude), Number(longitude)];
  return (
    <Card>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {house} {street} <br /> {city.name} {country.name}
          </Popup>
        </Marker>
      </MapContainer>
    </Card>
  );
};

export default Map;
