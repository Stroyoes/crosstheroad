import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from  "./components/Camera";
import { Player } from "./components/Player";

import "./style.css";

const scene = new THREE.Scene();
scene.add(Player);

const camera = Camera();
scene.add(camera);

const renderer = Renderer();
renderer.render(scene, camera);


