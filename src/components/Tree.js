import * as THREE from "three";
import { tileSize } from "../constants";

export function Tree(tileIndex, height) {
    const tree = new THREE.Group();
    tree.position.set(tileIndex * tileSize, 1, 0);

    const trunk = new THREE.Mesh(
        new THREE.BoxGeometry(15, 15, 20),
        new THREE.MeshLambertMaterial({
            color: 0xd492c6,
            flatShading: true,
        })
    );
    trunk.position.z = 10;
    tree.add(trunk);

    const crown = new THREE.Mesh(
        new THREE.BoxGeometry(30, 30, height),
        new THREE.MeshLambertMaterial({
            color: 0x7aa21d,
            flatShading: true,
        })
    );
    crown.position.z = height / 2 + 20;
    crown.castShadow = true;
    crown.receiveShadow = true;
    tree.add(crown);

    return tree;
}
