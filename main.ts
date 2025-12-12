import { Board, Player } from "./board.ts";

const board = new Board();
let player = Player.PlayerX;

board.output();

while (true) {
  const input = prompt(`Player ${player}: `) || "";
  const col = Number.parseInt(input, 10);

  if (Number.isNaN(col) || col < 0 || col >= 7) {
    console.log("Gib eine gültige Spalte von 0 bis 6 an.");
    continue;
  }

  const row = board.makeMove(player, col);

  if (row === -1) {
    console.log("Diese Spalte ist voll. Bitte eine andere Spalte wählen.");
    continue;
  }

  board.output();
  console.log();

  const winner = board.winner(player, row, col);
  if (winner != Player.Nobody) {
    console.log(`Player ${winner}: A winner is you!`);
    break;
  }

  player = player == Player.PlayerX ? Player.PlayerO : Player.PlayerX;
}