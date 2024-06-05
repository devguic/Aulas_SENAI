/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package aulaz28;

/**
 *
 * @author dev_noite
 */
public class Produto {
    
    
    String id;
    String nome;
    String marca;
    Double preco;
    int quantidade;
    
    void exibirProduto() {
        
        System.out.println("--------------Informações do produto " +id + " --------------------");
        System.out.println("id: " + id);
        System.out.println("nome: " + nome);
        System.out.println("marca: " + marca);
        System.out.println("preço: R$" + preco);
        System.out.println("quantidade: " + quantidade);
        System.out.println("---------------------------------------------------------");
        
    }  
    void valorTotaldoEstoque(){
        
        double total = preco * quantidade;
        System.out.println("O valor total do " + nome + " é R$" + total);
        
    
    }
    
    void alterarPreco(double novoPreco){
       
        preco = novoPreco; 
        System.out.println("------ Alteração do Preço -------");
        this.exibirProduto();
        this.valorTotaldoEstoque();
        
    }
    void QuantidadeVendida (int qtdVend){
        
        quantidade -= qtdVend; // quantidade = quantidade - quantidade vendida
        
        if (this.confereEstoque()) {
            
            System.out.println("Estoque Esgotado!!");
            
        }else{
        System.out.println("------ Alteração do Estoque (Venda) -------");
        this.exibirProduto();
        this.valorTotaldoEstoque();
    }}
   void QuantidadeAdicionada (int qtdAdd){
        
       quantidade += qtdAdd;
       System.out.println("------ Alteração do Estoque (Compra) -------");
        this.exibirProduto();
        this.valorTotaldoEstoque();
    } 
    boolean confereEstoque (){
       
        return quantidade <= 0;
       
    } 
    void aplicarDesconto (double percent){
        
        preco -= preco * (percent/100.0);
        
            
        }
    void aplicarDescontoTotal (double percentTotal){
        
        
        double total = preco * quantidade;
        total -= total * (percentTotal/100.0);
        System.out.printf(" Total com desconto: R$ %.2f", total);
        
            
        }
    }

    

