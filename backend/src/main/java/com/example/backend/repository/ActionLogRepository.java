package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.model.ActionLog;

public interface ActionLogRepository extends JpaRepository<ActionLog, Long> {
}
