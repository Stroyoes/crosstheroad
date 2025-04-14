import * as THREE from "three";
import { metadata as rows } from "./components/Map";
import { player, position } from "./components/Player";
import { gameState } from "./utils/GameState"

const resultDOM = document.getElementById("result-body");
const finalScoreDOM = document.getElementById("final-score");
const maxScoreDOM = document.getElementById("max-score");

export function hitTest() {
    const row = rows[position.currentRow - 1];
    if (!row) return;

    if (row.type === "car" || row.type === "truck") {
      const playerBoundingBox = new THREE.Box3();
      playerBoundingBox.setFromObject(player);

      row.vehicles.forEach(({ ref }) => {
        if (!ref) throw Error("Vehicle reference is missing");

        const vehicleBoundingBox = new THREE.Box3();
        vehicleBoundingBox.setFromObject(ref);

        if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) { 
          if (!resultDOM || !finalScoreDOM) return;

          resultDOM.style.visibility = "visible";
          finalScoreDOM.innerText = position.currentRow.toString();

          // Check for maximum score 
          if (gameState.maxScore < position.currentRow.toString()) {
            maxScoreDOM.innerText = position.currentRow.toString();
            gameState.maxScore = position.currentRow.toString();
          }
        }
      });
    }
}

