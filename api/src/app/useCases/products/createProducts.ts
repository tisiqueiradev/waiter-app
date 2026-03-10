import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response) {

  try {
    const imagePath = req.file?.filename;

    const {
      name,
      description,
      price,
      ingredients,
      category
    } = req.body;

    const priceNumber = Number(price);

    if (isNaN(priceNumber)) {
      return res.status(400).json({
        error: "Price must be a valid number"
      });
    }

    const product = await Product.create({
      name,
      description,
      price: priceNumber,
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      ...(imagePath && { imagePath }),
    });

    res.status(201).json(product);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }


}
