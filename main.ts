import { Board, Player } from "./board.ts";

const board = new Board();
let player = Player.PlayerX;

board.output();

while (true) {
  const input = prompt(`Player ${player}:`) || "";
  const col = Number.parseInt(input, 10);
  const row = board.makeMove(player, col);

  if (Number.isNaN(col) || col < 0 || col >= 7) {
    console.log("Gib eine gültige spalte an.");
    continue;
  }

  board.output();
  console.log();
  
  const winner = board.winner(player, row, col);
  if (winner != Player.Nobody) {
    console.log(`Player ${player}: A winner is you!`);
    break;
  }
  player = player == Player.PlayerX ? Player.PlayerO : Player.PlayerX;
}