/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aula.pkg25;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
import java.util.*;

public class Aula25 {
    
     List<String> nomes = new ArrayList();
     List<Integer> idades = new ArrayList();
        

   void cadastrar(){
       
        Scanner ler = new Scanner (System.in);
        Scanner lerS = new Scanner (System.in);
        
       
        boolean check;
        
        do {            
            System.out.println("Digite o nome do Cliente: ");
            nomes.add(lerS.nextLine());
            
            System.out.println("informe sua idade");
            idades.add(ler.nextInt());
            
            System.out.println("Deseja cadastrar outro Cliente: 1.SIM/2.NÃO");
            System.out.println("=>");
            int opt = ler.nextInt();
            
            check = opt == 1;
                
        } while (check);
        
        System.out.println("Cliente(s) Cadastrado(s) com Sucesso!");
           
   }
   
   void listar(){
       
       int qtde = nomes.size();
      
       System.out.println(qtde+"foram cadastarados no sistema.");
       System.out.println("----Lista de clientes cadastrados-------");
       
       for (int i = 0; i < qtde; i++) {
           
           System.out.println("------------- CLIENTE" +i+ "-----------");
           System.out.println("Nome:"+ nomes.get(i));
           System.out.println("Idade:"+idades.get(i));
           System.out.println("-------------------------------------");
           
       }
 {
           
           
           
       }
       
       
   }
   
   void deletar(){
   
    Scanner ler = new Scanner(System.in);
    
    System.out.println("Digite o nome do cliente que deseja excluir:");
    String nomeExcluir = ler.nextLine();
    
    // Verifica se o nome existe na lista
    if (nomes.contains(nomeExcluir)) {
        System.out.println("Tem certeza que deseja excluir o cliente " + nomeExcluir + "? (1.SIM/2.NÃO)");
        int confirmacao = ler.nextInt();
        
        if (confirmacao == 1) {
            int index = nomes.indexOf(nomeExcluir); // Obtém o do nome a ser excluído
            nomes.remove(index); // Remove o nome da lista
            idades.remove(index); // Remove a idade correspondente
            
            System.out.println("Cliente excluído com sucesso!");
        } else {
            System.out.println("Exclusão cancelada.");
        }
    } else {
        System.out.println("Cliente não encontrado.");
    }
   }
   
   
    public static void main(String[] args) {
        
       
        Aula25 aula = new Aula25();
        
        Scanner input = new Scanner(System.in);
        
        boolean ok = true;
        
         do {           
             
        System.out.println("--------Sistema De Cadastro--------");
        System.out.println("Escolha as opções abaixo: ---------");
        System.out.println("1.CADASTRAR CLIENTE----------------");
        System.out.println("2.LISTAR CLIENTE ------------------");
        System.out.println("3.EXCLUIR CLIENTE -----------------");
        System.out.println("4.SAIR DO SISTEMA -----------------");
        System.out.println("=>");
        int escolha = input.nextInt();
        
        switch (escolha) {
            case 1:
                 aula.cadastrar();
                break;
                
            case 2:
                aula.listar();
                break;
            case 3:
                aula.deletar();
                break;
            case 4:
                ok = false;
                break;
            default:
                System.out.println("Opção inválida");
                break;
        }
        
         } while (ok);
        
        System.out.println("Sistema Finalizado");
        
        clearScreen(); // Chamada para limpar a tela
    }
    
    // Método para limpar a tela
    public static void clearScreen() {  
        try {
            if (System.getProperty("os.name").contains("Windows")) {
                new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
            } else {
                System.out.print("\033[H\033[2J");
                System.out.flush();
            }
        } catch (IOException | InterruptedException e) {
            System.out.println("Erro ao limpar a tela: " + e.getMessage());
        }
    }
}
