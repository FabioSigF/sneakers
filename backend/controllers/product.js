import { db } from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * FROM product";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getProductPhotos = (req, res) => {
  const q = "SELECT * FROM photo_product WHERE id=?";

  db.query(q, req.params.id, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
