---
title: Mentorship CRM
subtitle: Vaadin Flow 24 · Spring Boot 3
summary: >-
  A role-based web app for running an internship programme: admins manage
  users, mentors assign and review tasks, and interns follow their own tasks
  and evaluations.
metric: "3 roles · PDF evaluations · Docker"
tags: [Java 17, Spring Boot, Spring Security, JPA]
repo: https://github.com/yasinserifhan/mentorship-crm
role: Personal project
order: 3
featured: true
---

A personal project, not code written for or owned by an internship employer.

## Features

- **Three roles** (Admin, Mentor, Intern), each with its own views. Spring
  Security via `VaadinWebSecurity`, a custom `UserDetailsService` and a
  delegating (BCrypt) password encoder.
- **Tasks** with statuses Open · In Progress · Late · Done, assigned by mentors
  to their interns.
- **Evaluations:** mentors evaluate interns; an evaluation can be exported as a
  PDF (OpenPDF).
- **Admin overview:** summary statistics and tasks completed over the last N
  days.
- **JPA / Hibernate data model:** the intern entity shares its primary key with
  `User` (`@OneToOne` + `@MapsId`); task queries use `join fetch` to avoid N+1
  selects.
- **Testing and packaging:** a Vaadin TestBench end-to-end login test and a
  Dockerfile for the packaged jar.

## Stack

Java 17 · Spring Boot 3.5 · Spring Security · Spring Data JPA / Hibernate ·
Vaadin Flow 24 · Oracle · OpenPDF · Maven · Docker
