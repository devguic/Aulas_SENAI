/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package atividade1_.igor.e.guilherme;

import java.sql.Time;
import static java.time.Clock.system;
import java.util.Scanner;

/**
 *
 * @author Aluno_Manha
 */
public class Atividade1_IgorEGuilherme {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Scanner ler = new Scanner (System.in);
    String Time1, Time2;
    int Gols1, Gols2;
    
    
    System.out.println("Informe o primeiro time");
    Time1= ler.next();
    
    System.out.println("Informe o segundo time");
    Time2= ler.next();
    
    System.out.println("Informe os gols do primeiro time");
    Gols1= ler.nextInt();
    
    System.out.println("Informe os gols do segundo time");
    Gols2= ler.nextInt();
    
    
    
    
    
        if (Gols1 > Gols2) {
            
            System.out.println(Time1 + " ganhou");
            
        } else if (Gols2 > Gols1)
            
            System.out.println(Time2 + " ganhou");
        else 
        System.out.println(Time1 + " e " + Time2 + " empataram");
        
              
      
            
            
        }
    
    
    
    }
