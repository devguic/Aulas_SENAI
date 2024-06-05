/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import javax.swing.JOptionPane;
import model.Cliente;

/**
 *
 * @author dev_noite
 */
public class ClienteController {
    
    Cliente c1;
    
    
    public void cadCliente(String nome,
     String email,
     String cpf,
     String contato,
     String sexo,
     String preferencia,
     String estado,
     String senha){
    
        int id = (int) (Math.random() * 100 + 1);
     c1 = new Cliente(id, nome, email, cpf, contato, sexo, preferencia, estado, senha);
        

}
   public void exibirCadastro(){
       
       JOptionPane.showMessageDialog(null,
                    "---------- Informações cadastradas ----------- \n " +  
                  "ID: " + c1.getId() + "\n" +
                  "Nome: " + c1.getNome() + "\n" +
                  "E-mail: " + c1.getEmail() + "\n" +
                  "CPF: " + c1.getCpf() + "\n" +
                  "Contato: " + c1.getContato() + "\n" +
                  "Sexo: " + c1.getSexo() + "\n" +
                  "Preferência: " + c1.getPreferencia() + "\n" +
                  "Estado: " + c1.getEstado() + "\n" +
                  "Senha: " + c1.getSenha() + "\n" +
                  "----------------------------------------------"
               , "Cliente cadastrado ", 
               
               JOptionPane.INFORMATION_MESSAGE);
   }
   
   public boolean validarCampos(){
       
       
      
       if (c1.getNome().isEmpty()) {
          
          JOptionPane.showMessageDialog(null, "Você não preencheu o nome", "Erro", JOptionPane.ERROR_MESSAGE);
           return false;
       } else if (c1.getEmail().isEmpty()) {
           
           JOptionPane.showMessageDialog(null, "Você não preencheu o Email", "Erro", JOptionPane.ERROR_MESSAGE);
           return false;
       } else if (c1.getCpf().equals("   .   .   -  ")) {
           JOptionPane.showMessageDialog(null, "Você não preencheu o CPF", "Erro", JOptionPane.ERROR_MESSAGE);
           return false;
        } else if (c1.getContato().equals("(  )       -    ")) {
            
           JOptionPane.showMessageDialog(null, "Você não preencheu o Contato", "Erro", JOptionPane.ERROR_MESSAGE);
           return false;
            
        } else if (c1.getSexo().isEmpty()) {
            JOptionPane.showMessageDialog(null, "Você não indicou o seu Sexo", "Erro", JOptionPane.ERROR_MESSAGE);
           return false;
        }else if (c1.getPreferencia().equals("[]")) {
            JOptionPane.showMessageDialog(null, "Você não indicou a Preferência", "Erro", JOptionPane.ERROR_MESSAGE);
           return false;
        }else if (c1.getEstado().equals("--Selecione--")) {
            JOptionPane.showMessageDialog(null, "Você não indicou o seu Estado", "Erro", JOptionPane.ERROR_MESSAGE);
           return false;
        }else if (c1.getSenha().isEmpty()) {
            JOptionPane.showMessageDialog(null, "Você não escolheu a senha", "Erro", JOptionPane.ERROR_MESSAGE);
           return false;
        }else {
            return true;
        }
   }
}
