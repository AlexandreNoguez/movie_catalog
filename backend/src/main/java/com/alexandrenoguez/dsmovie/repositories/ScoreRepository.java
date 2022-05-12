package com.alexandrenoguez.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alexandrenoguez.dsmovie.entities.Score;
import com.alexandrenoguez.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
