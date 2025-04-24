package com.rc_app.riesgocrediticio;

import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

import com.rc_app.riesgocrediticio.controller.AuthController;
import com.rc_app.riesgocrediticio.model.User;
import com.rc_app.riesgocrediticio.service.UserService;

@WebMvcTest(AuthController.class)
class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @MockBean
    private PasswordEncoder passwordEncoder;

    @Test
    @WithMockUser(username = "testuser", roles = "USER") // No necesitas especificar la contraseña aquí, ya que se está simulando
    void loginSuccessTest() throws Exception {
        String username = "testuser";
        String rawPassword = "1234";
        String encodedPassword = "$2a$10$abcdefghijk1234567890..."; // Asegúrate de que sea un hash válido

        User user = new User();
        user.setUsername(username);
        user.setPassword(encodedPassword);

        // Simulamos el comportamiento del servicio y la comparación de contraseñas
        when(userService.findByUsername(username)).thenReturn(user);
        when(passwordEncoder.matches(rawPassword, encodedPassword)).thenReturn(true);

        mockMvc.perform(get("/auth/login")
                .param("username", username)
                .param("password", rawPassword))
                .andExpect(status().isOk())  // Esperamos el estado 200 OK
                .andExpect(content().string("Login correcto"));  // Asegúrate de que la respuesta sea exactamente esta
    }

    @Test
    @WithMockUser(username = "testuser", roles = "USER")
    void loginFailureTest() throws Exception {
        String username = "testuser";
        String wrongPassword = "wrongpassword";

        mockMvc.perform(get("/auth/login")
                .param("username", username)
                .param("password", wrongPassword))
                .andExpect(status().isUnauthorized()) // Esperamos un 401 si la contraseña es incorrecta
                .andExpect(content().string("Credenciales inválidas"));
    }
}
