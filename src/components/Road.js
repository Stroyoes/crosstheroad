import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Road(rowIndex) {
    const road = new THREE.Group();
    road.position.y = rowIndex * tileSize;

    const foundation = new THREE.Mesh(
        new THREE.PlaneGeometry(tilesPerRow * tileSize, tileSize),
        new THREE.MeshLambertMaterial({ color: 0x000000 })
    );
    foundation.receiveShadow = true;
    road.add(foundation);
    
    return road;
}
