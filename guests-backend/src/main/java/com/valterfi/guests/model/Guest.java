package com.valterfi.guests.model;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "guests")
public class Guest {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "confirmed")
	private boolean confirmed;

	@Temporal(TemporalType.TIMESTAMP)
    private Date creationDateTime;

	public Guest() {

	}

	public Guest(String name, String email, boolean confirmed) {
		this.name = name;
		this.email = email;
		this.confirmed = confirmed;
		this.creationDateTime = new Date();
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isConfirmed() {
		return confirmed;
	}

	public void setConfirmed(boolean confirmed) {
		this.confirmed = confirmed;
	}

	public Date getCreationDateTime() {
		return creationDateTime;
	}

	public void setCreationDateTime(Date creationDateTime) {
		this.creationDateTime = creationDateTime;
	}

	@Override
	public String toString() {
		return "Guest [id=" + id + ", name=" + name + ", email=" + email + ", confirmed=" + confirmed
				+ ", creationDateTime=" + creationDateTime + "]";
	}

}
