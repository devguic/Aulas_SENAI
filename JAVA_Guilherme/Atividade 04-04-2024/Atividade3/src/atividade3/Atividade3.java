/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade3;

import java.util.Scanner;

/**
 *
 * @author dev_noite
 */
public class Atividade3 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
   
    Scanner ler = new Scanner (System.in);
    
    int escolha1, escolha2;
    int sair = 1;
    
    
    
    Televisor sony = new Televisor();
    
   sony.canal = 1;
   sony.ligado = false;
   sony.volume = 0;
   
        System.out.println("O que deseja fazer? ");
        System.out.println("1 - Ligar a TV");
        System.out.println("0- Sair");
        escolha1 = ler.nextInt();
        
        if (escolha1 ==1) {
            
            
            
            sony.ligarTelevisor();
            
            do {                
                
            System.out.println("1 - Aumentar o volume da TV");
            System.out.println("2 - Diminuir o volume da TV");
            System.out.println("3 - Subir o Canal da TV");
            System.out.println("4 - Descer o Canal da TV");
            System.out.println("5 - Mostrar o Status da TV (volume, canal)");
            System.out.println("0 - DESLIGAR");
            escolha2= ler.nextInt();
            sony.mostraStatus();
            
                switch (escolha2) {
                    case 1:
                        sony.aumentarVolume();
                        
                        break;
                        
                        case 2:
                        
                            sony.reduzirVolume();
                            
                        break;
                        
                        case 3:
                        
                            sony.subirCanal();
                            
                        break;
                        
                        case 4:
                        
                            sony.descerCanal();
                            
                        break;
                        
                        case 5:
                            
                            sony.mostraStatus();
                        
                        break;
                        
                    default:
                        System.out.println("Opção inválida");;
                }
            
            } while (escolha2 != 0);
           
         sony.desligarTelevisor();
            
        }else{
            
            System.out.println("Tchau");
        }
   
    
    
    
    
    }
    
}
