/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aulaz30;

/**
 *
 * @author dev_noite
 */
public class Aulaz30 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    
    Cliente cc = new Cliente();
    Cliente cd = new Cliente(1002, "Julia Maria", "juju@gmail.com", "(31) 987451966", "40028922", 2002);
    
    cc.setNome("Mara");
    cc.setEmail("Maramaravilha.gmai.com");
    cc.setCpf("121.212-12");
    cc.setSaldo(1600.00);
    cc.setId(3199889);
    cc.setSaldo(3198);
    
    
    
    
    
    
    
    cc.exibirCliente();
    cd.exibirCliente();
        
       
    
    
    }
    
}
