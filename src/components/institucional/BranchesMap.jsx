'use client';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const customIcon = new Icon({
    iconUrl: '/images/map-pin.svg',
    iconSize: [35, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const BranchesMap = ({ branches, branchSelected }) => {
    return (
        <MapContainer center={[branchSelected.latitude, branchSelected.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                branches.map(branch =>
                (
                    <Marker key={branch.city} position={[branch.latitude, branch.longitude]} icon={customIcon}>
                        <Popup>
                            {branch.city}
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    )
}

export default BranchesMap;