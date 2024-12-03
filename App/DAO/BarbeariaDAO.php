<?php

namespace App\DAO;

use PDO;

class BarbeariaDAO extends DAO
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getAllBarbearias()
    {
        $sql = "
        SELECT 
            b.id,
            b.nome_barbearia,
            b.banner,
            e.logradouro,
            e.numero,
            e.cidade,
            e.estado,
            e.cep
        FROM Barbearia b
        INNER JOIN Endereco e ON b.id_endereco = e.id
        ";

        $stmt = $this->conexao->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_OBJ);
    }
}