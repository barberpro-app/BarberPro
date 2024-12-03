<?php

namespace App\Model;

use App\DAO\LoginDAO;

class LoginModel extends Model
{
    public $id, $email, $senha, $nome, $avatar;

    public function authenticate()
    {
        $dao = new LoginDAO();

        $dados_usuario_logado = $dao->selectByEmailAndSenha($this->email, $this->senha);

        if(is_object($dados_usuario_logado))
            return $dados_usuario_logado;
        else
            null;
    }

    public function getUserInfo($id)
    {
        $dao = new LoginDAO();
        return $dao->selectById($id);
    }
}