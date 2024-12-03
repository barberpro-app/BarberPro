<?php

namespace App\Controller;

use App\Model\CadastroBarberModel;
use App\Model\EnderecoModel;

class CadastroBarberController extends Controller
{
    public static function index()
    {
        parent::render('/Cadastro/FormCadastroBarbearia');
    }

    public static function form()
    {
        $model = new CadastroBarberModel();

        if(isset($_GET['id']))
            $model = $model->getById( (int) $_GET['id']);

        parent::render('/Login/FormLoginBarber', $model);
    }

    public static function save()
    {
            // Salvar endereço
        $endereco = new EnderecoModel();
        $endereco->logradouro = $_POST['logradouro'];
        $endereco->bairro = $_POST['bairro'];
        $endereco->numero = $_POST['numero'];
        $endereco->cidade = $_POST['cidade'];
        $endereco->estado = $_POST['estado'];
        $endereco->cep = $_POST['cep'];

        $id_endereco = $endereco->save(); // Salva e retorna o ID do endereço

        // Salvar barbearia
        $cadastro = new CadastroBarberModel();
        $cadastro->nome_barbearia = $_POST['nome_barbearia'];
        $cadastro->nome_contato = $_POST['nome_contato'];
        $cadastro->email = $_POST['email'];
        $cadastro->senha = $_POST['senha'];
        $cadastro->telefone = $_POST['telefone'];
        $cadastro->cnpj = $_POST['cnpj'];
        $cadastro->id_endereco = $id_endereco; // Associar o ID do endereço ao cadastro
        

        $cadastro->banner = '/uploads/barbearias/barber-banner.png';

        $cadastro->save();

        header("Location: /login_barbershop");
    }

}