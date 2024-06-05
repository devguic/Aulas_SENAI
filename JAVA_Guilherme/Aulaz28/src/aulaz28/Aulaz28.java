/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz28;

/**
 *
 * @author dev_noite
 */
public class Aulaz28 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    
    Produto o1 = new Produto ();
    Produto o2 = new Produto ();
    
    o1.nome = "Guaraná 2L";
    o1.marca = "Antártica";
    o1.id = "19191900";
    o1.preco = 12.00;
    o1.quantidade = 300;
    
    
    o2.nome = "Coca zero 2L";
    o2.marca = "Coca Cola";
    o2.id = "300221";
    o2.preco = 12.00;
    o2.quantidade = 100;
    
    
  
    
    
    o1.alterarPreco(10.00);
    
    o1.aplicarDesconto(20);
    
    o1.QuantidadeAdicionada(100);
    
    o1.aplicarDescontoTotal(4);
            
    o1.QuantidadeVendida(100);
   
    

    
    }
    
}
