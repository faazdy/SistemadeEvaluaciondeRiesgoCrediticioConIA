package com.rc_app.riesgocrediticio.repository;

import com.rc_app.riesgocrediticio.model.FinancialInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinancialInfoRepository extends JpaRepository<FinancialInfo, Long> {
}