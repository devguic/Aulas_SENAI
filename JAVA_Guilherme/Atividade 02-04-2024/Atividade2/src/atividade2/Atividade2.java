/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade2;

import java.util.Arrays;
import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade2 {

    /**
     * @param args the command line arguments
     */
    @SuppressWarnings("empty-statement")
    public static void main(String[] args) {
        // TODO code application logic here
    
        
    Scanner ler = new Scanner(System.in);    
        
    String [] nomes = {"marcos", "vinicius", "guilherme", "matheus", "gabriel", "victoria", "leonardo", "heitor", "ricardo", "natan", "danilo"};
    Arrays.sort  (nomes);
    int i = 0;
  
    
    String tentativa;
   
    
    
        do {            
           
           
            System.out.println("Informe um nome");
            tentativa= ler.nextLine(). toLowerCase();
            
            int result = Arrays.binarySearch(nomes, tentativa);
            
             
                         
            if (result > 0) {
                
                System.out.println("Achei");
                
            } else {
                
                System.out.println("Não Achei");
            
            
            
            }
            
            i++;
            
        } while (i < 10);
        
        }}        
        
        