package com.rc_app.riesgocrediticio.controller;

import com.rc_app.riesgocrediticio.model.FinancialInfo;
import com.rc_app.riesgocrediticio.model.User;
import com.rc_app.riesgocrediticio.repository.FinancialInfoRepository;
import com.rc_app.riesgocrediticio.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;

@RestController
@RequestMapping("/api/financial")
public class FinancialInfoController {

    @Autowired
    private FinancialInfoRepository repository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<String> guardarInfoFinanciera(@RequestBody FinancialInfo info, Principal principal) {
        // Obtener el usuario
        User user = userRepository.findByUsername(principal.getName())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Asignar el usuario - ELIMINA ESTA LÍNEA SI NO EXISTE SETUSER
        // info.setUser(user); // SOLO si existe este método en FinancialInfo

        // Alternativa segura usando reflexión
        try {
            // Intenta con setUser primero
            info.getClass().getMethod("setUser", User.class).invoke(info, user);
        } catch (Exception e1) {
            try {
                // Si falla, intenta con setUsuario
                info.getClass().getMethod("setUsuario", User.class).invoke(info, user);
            } catch (Exception e2) {
                throw new RuntimeException("No se encontró método para asignar usuario a FinancialInfo", e2);
            }
        }

        // Guardar la información
        FinancialInfo savedInfo = repository.save(info);

        // Retornar respuesta
        return ResponseEntity.ok("Información guardada exitosamente");
    }
}