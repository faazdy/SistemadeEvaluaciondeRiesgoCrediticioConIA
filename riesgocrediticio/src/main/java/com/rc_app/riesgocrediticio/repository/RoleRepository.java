package com.rc_app.riesgocrediticio.repository;

import com.rc_app.riesgocrediticio.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByRole(String role);

    boolean existsByRole(String role);
}
