import { Board, Player } from "./board.ts";

const board = new Board();
let player = Player.PlayerX;

board.output();

while (true) {
  const input = prompt(`Player ${player}:`) || "";
  const col = Number.parseInt(input);

  if (isNaN(col) || col < 0 || col > 6) {
    console.log("Ungueltige Eingabe! Bitte Zahl von 0-6 eingeben.");
    continue;
  }

  const row = board.makeMove(player, col);
  board.output();
  console.log();
  const winner = board.winner(player, row, col);
  if (winner != Player.Nobody) {
    console.log(`Player ${player}: A winner is you!`);
    break;
  }
  player = player == Player.PlayerX ? Player.PlayerO : Player.PlayerX;
}
