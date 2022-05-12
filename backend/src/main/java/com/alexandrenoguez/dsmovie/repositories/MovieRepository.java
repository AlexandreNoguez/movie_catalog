package com.alexandrenoguez.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alexandrenoguez.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
