
package com.portfolio.maa.Interface;

import com.portfolio.maa.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //get listado de personas
    public List<Persona> getPersona();
    
    //save obj persona 
    public void savePersona (Persona persona);
    
    //delete obj persona
    public void deletePersona (Long id);
    
    // find persona
    public Persona findPersona (Long id);
    
    
}
