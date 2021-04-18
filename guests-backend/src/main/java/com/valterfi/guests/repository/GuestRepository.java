package com.valterfi.guests.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valterfi.guests.model.Guest;

public interface GuestRepository extends JpaRepository<Guest, Long> {
  List<Guest> findByConfirmed(boolean confirmed);

  List<Guest> findByNameContaining(String name);
}
