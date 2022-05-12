package com.alexandrenoguez.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alexandrenoguez.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByMail(String email);

}
