import { assertEquals } from "@std/assert";
import { Board, Player } from "./board.ts";

Deno.test("dummy", () => {
  const board = new Board();
  const winner = board.winner(Player.PlayerX, 1, 1);
  assertEquals(winner, Player.Nobody);
});

Deno.test("diagonaler Sieg fallend", () => {
  const board = new Board();
  
  board.makeMove(Player.PlayerO, 0);
  board.makeMove(Player.PlayerO, 0);
  board.makeMove(Player.PlayerO, 0);
  board.makeMove(Player.PlayerX, 0);
  
  board.makeMove(Player.PlayerO, 1);
  board.makeMove(Player.PlayerO, 1);
  board.makeMove(Player.PlayerX, 1);
  
  board.makeMove(Player.PlayerO, 2);
  board.makeMove(Player.PlayerX, 2);
  
  const row = board.makeMove(Player.PlayerX, 3);
  
  const winner = board.winner(Player.PlayerX, row, 3);
  assertEquals(winner, Player.PlayerX);
});

Deno.test("volle Spalte gibt -1 zurueck", () => {
  const board = new Board();
  
  board.makeMove(Player.PlayerX, 0);
  board.makeMove(Player.PlayerO, 0);
  board.makeMove(Player.PlayerX, 0);
  board.makeMove(Player.PlayerO, 0);
  board.makeMove(Player.PlayerX, 0);
  board.makeMove(Player.PlayerO, 0);
  
  const row = board.makeMove(Player.PlayerX, 0);
  assertEquals(row, -1);
});