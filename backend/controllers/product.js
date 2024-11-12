import { db } from "../db.js";

// Função para obter todos os produtos
export const getProducts = (_, res) => {
  const q = "SELECT * FROM product";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Função para obter um produto específico com suas fotos
export const getProduct = (req, res) => {
  const qProduct = "SELECT * FROM product WHERE id=?";
  const qPhotos = "SELECT * FROM product_photos WHERE product_id=?";

  // Consulta para obter as informações do produto
  db.query(qProduct, [req.params.id], (err, productData) => {
    if (err) return res.json(err);
    if (productData.length === 0) return res.status(404).json({ message: "Produto não encontrado" });

    // Consulta para obter as fotos do produto
    db.query(qPhotos, [req.params.id], (err, photosData) => {
      if (err) return res.json(err);

      // Retorna a descrição do produto e suas fotos
      return res.status(200).json({
        description: productData[0],
        photos: photosData
      });
    });
  });
};

// Função para obter as fotos de um produto específico
export const getProductPhotos = (req, res) => {
  const q = "SELECT * FROM product_photos WHERE product_id=?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
