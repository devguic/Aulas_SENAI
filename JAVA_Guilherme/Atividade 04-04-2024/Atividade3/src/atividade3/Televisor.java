/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package atividade3;

/**
 *
 * @author dev_noite
 */
public class Televisor {
    

int canal;
int volume;
boolean ligado;

void aumentarVolume() {
    
   if (volume == 10) {
        
        System.out.println("Máx");
        System.out.println("-----------------------");
        System.out.println("-----------------------");
    } else {
        volume++;
        System.out.println("Volume: " + volume);
        System.out.println("-----------------------");
        System.out.println("-----------------------");
    }
    
}
void reduzirVolume() {
    
    
    if (volume == 0) {
        
        System.out.println("Mute");
        System.out.println("-----------------------");
        System.out.println("-----------------------");
    } else {
        volume--;
        System.out.println("Volume: " + volume);
        System.out.println("-----------------------");
        System.out.println("-----------------------");
    }
    
    
}
void subirCanal() {
    
    if (canal == 16) {
        
        canal = 1;
        System.out.println("Canal: " + canal);
        System.out.println("-----------------------");
        System.out.println("-----------------------");
        
    } else {
        
        canal ++;
        System.out.println("Canal: " + canal);
        System.out.println("-----------------------");
        System.out.println("-----------------------");
    }
    
    
}

void descerCanal() {
    
    if (canal == 1) {
        
        canal = 16;
        System.out.println("Canal: " + canal);
        System.out.println("-----------------------");
        System.out.println("-----------------------");
        
    } else {
        
        canal --;
        System.out.println("Canal: " + canal);
        System.out.println("-----------------------");
        System.out.println("-----------------------");
    }
    
    
}
void ligarTelevisor() {
    
   ligado = true;
   
    if (ligado == true) {
        System.out.println("LIGANDO.....");
        System.out.println("LIGADO!!!");
        System.out.println("-----------------------");
        System.out.println("-----------------------");
        
    }
    
    
}
void desligarTelevisor() {
    
   ligado = false;
   
    if (ligado == false) {
        System.out.println("DESLIGANDO.....");
        System.out.println("...........");
        
    }
    
    
}

void mostraStatus() {
    
    if (ligado == true) {
        
       
        System.out.println("A TV está desligada");
        System.out.println("-----------------------");
        System.out.println("-----------------------");
        System.out.println("Canal: " + canal);
        System.out.println("Volume: " + volume);
        System.out.println("-----------------------");
        System.out.println("-----------------------");
        
        
    } else {
        
        System.out.println("A TV está desligada");
        System.out.println("-----------------------");
        System.out.println("-----------------------");
    }
    
    
    
}



}
