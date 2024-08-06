import { Request, Response } from "express";
import { db } from "../config/firebaseConfig";

interface Token {
  currencyCode: string;
  issuer: string;
  issueQuantity: number;
}

const addToken = async (req: Request, res: Response) => {
  try {
    const token: Token = req.body;
    const docRef = await db.collection("tokens").add(token);
    res.status(201).json({ id: docRef.id, message: "Token added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding token", error });
  }
};

const getTokens = async (req: Request, res: Response) => {
  try {
    const querySnapshot = await db.collection("tokens").get();
    const tokens: Token[] = [];
    querySnapshot.forEach((doc) => {
      tokens.push(doc.data() as Token);
    });
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving tokens", error });
  }
};

export { addToken, getTokens };
