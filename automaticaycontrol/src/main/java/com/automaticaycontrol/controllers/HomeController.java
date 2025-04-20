package com.automaticaycontrol.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping({"", "/"})
	public String home() {
		return "index";
	}
/*
	@GetMapping("/contact")
	public String contact() {
		return "contact";
	}*/

	@PreAuthorize("isAuthenticated()")
	@GetMapping("/easier/user")
	public String userPage() {
		return "user";
	}

	/*Automatas*/

	@GetMapping("/Automatas//automatas")
	public String automatas() {
		return "Automatas/automatas";
	}

	@GetMapping("/Automatas/saberes")
	public String saberes() {
		return "Automatas/saberes";
	}

	@GetMapping("/Automatas/cadena")
	public String cadena() {
		return "Automatas/cadena";
	}

	@GetMapping("/Automatas/aufindetermin")
	public String aufindetermin() {
		return "Automatas/aufindetermin";
	}

	@GetMapping("/Automatas/aufinnoder")
	public String aufinnoder() {
		return "Automatas/aufinnoder";
	}

	@GetMapping("/Automatas/lenguajes")
	public String lenguajes() {
		return "Automatas/lenguajes";
	}

	@GetMapping("/Automatas/transiciones")
	public String transiciones() {
		return "Automatas/transiciones";
	}

	@GetMapping("/Automatas/regulares")
	public String regulares() {
		return "Automatas/regulares";
	}

	@GetMapping("/Automatas/contexto")
	public String contexto() {
		return "Automatas/contexto";
	}

	@GetMapping("/Automatas/pila")
	public String pila() {
		return "Automatas/pila";
	}

	@GetMapping("/Automatas/arbol")
	public String arbol() {
		return "Automatas/arbol";
	}

	@GetMapping("/Automatas/atributo")
	public String atributo() {
		return "Automatas/atributo";
	}

	@GetMapping("/Automatas/gic")
	public String gic() {
		return "Automatas/gic";
	}

	@GetMapping("/Automatas/chomsky")
	public String chomsky() {
		return "Automatas/chomsky";
	}

	@GetMapping("/Automatas/greibach")
	public String greibach() {
		return "Automatas/greibach";
	}

	@GetMapping("/Automatas/descendente")
	public String descendente() {
		return "Automatas/descendente";
	}

	@GetMapping("/Automatas/ascendente")
	public String ascendente() {
		return "Automatas/ascendente";
	}

	@GetMapping("/Automatas/talleres")
	public String talleres() {
		return "Automatas/talleres";
	}

	@GetMapping("/Automatas/laboratorios")
	public String laboratorios() {
		return "Automatas/laboratorios";
	}

	/*Bases de datos uno*/

	@GetMapping("/Basedatosuno/dbms")
	public String dbms() {
		return "Basedatosuno/dbms";
	}

	@GetMapping("/Basedatosuno/datos")
	public String datos() {
		return "Basedatosuno/datos";
	}

	@GetMapping("/Basedatosuno/conjuntos")
	public String conjuntos() {
		return "Basedatosuno/conjuntos";
	}

	@GetMapping("/Basedatosuno/evaluacion")
	public String evaluacion() {
		return "Basedatosuno/evaluacion";
	}

	@GetMapping("/Basedatosuno/miguia")
	public String miguia() {
		return "Basedatosuno/miguia";
	}

	@GetMapping("/Basedatosuno/modelo")
	public String modelo() {
		return "Basedatosuno/modelo";
	}

	@GetMapping("/Basedatosuno/resumen")
	public String resumen() {
		return "Basedatosuno/resumen";
	}

	@GetMapping("/Basedatosuno/tablas")
	public String tablas() {
		return "Basedatosuno/tablas";
	}

	@GetMapping("/Basedatosuno/taller")
	public String taller() {
		return "Basedatosuno/taller";
	}

	@GetMapping("/Basedatosuno/vistas")
	public String vistas() {
		return "Basedatosuno/vistas";
	}

	@GetMapping("/Basedatosuno/captura")
	public String captura() {
		return "Basedatosuno/captura";
	}

	/*Bases de datos dos*/
	@GetMapping("/Basedatdos/saberesii")
	public String saberesii() {
		return "Basedatdos/saberesii";
	}

	@GetMapping("/Basedatdos/vistasii")
	public String vistasii() {
		return "Basedatdos/vistasii";
	}

	@GetMapping("/Basedatdos/funciones")
	public String funciones() {
		return "Basedatdos/funciones";
	}

	@GetMapping("/Basedatdos/multisentencia")
	public String multisentencia() {
		return "Basedatdos/multisentencia";
	}

	@GetMapping("/Basedatdos/linea")
	public String linea() {
		return "Basedatdos/linea";
	}

	@GetMapping("/Basedatdos/procedimientos")
	public String procedimientos() {
		return "Basedatdos/procedimientos";
	}

	@GetMapping("/Basedatdos/esquemas")
	public String esquemas() {
		return "Basedatdos/esquemas";
	}

	@GetMapping("/Basedatdos/flujo")
	public String flujo() {
		return "Basedatdos/flujo";
	}

	@GetMapping("/Basedatdos/errores")
	public String errores() {
		return "Basedatdos/errores";
	}

	@GetMapping("/Basedatdos/triggers")
	public String triggers() {
		return "Basedatdos/triggers";
	}

	@GetMapping("/Basedatdos/cursores")
	public String cursores() {
		return "Basedatdos/cursores";
	}

	@GetMapping("/Basedatdos/transacciones")
	public String transacciones() {
		return "Basedatdos/transacciones";
	}

	@GetMapping("/Basedatdos/objetos")
	public String objetos() {
		return "Basedatdos/objetos";
	}

	@GetMapping("/Basedatdos/nosql")
	public String nosql() {
		return "Basedatdos/postgresl";
	}

	@GetMapping("/Basedatdos/oracle")
	public String oracle() {
		return "Basedatdos/oracle";
	}

	@GetMapping("/Basedatdos/biblio")
	public String biblio() {
		return "Basedatdos/biblio";
	}
	/*Bases de datos Dos*/

	/*HerramientasII*/
	@GetMapping("/HerramientasII/atributosh")
	public String atributosh() {
		return "HerramientasII/atributosh";
	}

	@GetMapping("/HerramientasII/basedatosh")
	public String basedatosh() {
		return "HerramientasII/basedatosh";
	}

	@GetMapping("/HerramientasII/combo")
	public String combo() {
		return "HerramientasII/combo";
	}

	@GetMapping("/HerramientasII/comunicajava")
	public String comunicajava() {
		return "HerramientasII/comunicajava";
	}

	@GetMapping("/HerramientasII/calculadorajava")
	public String calculadorajava() {
		return "HerramientasII/calculadorajava";
	}

	@GetMapping("/HerramientasII/herencia")
	public String herencia() {
		return "HerramientasII/herencia";
	}

	@GetMapping("/HerramientasII/interfaces")
	public String interfaces() {
		return "HerramientasII/interfaces";
	}

	@GetMapping("/HerramientasII/miscelaneos")
	public String miscelaneos() {
		return "HerramientasII/miscelaneos";
	}

	@GetMapping("/HerramientasII/objetosh")
	public String objetosh() {
		return "HerramientasII/objetosh";
	}

	@GetMapping("/HerramientasII/paneles")
	public String paneles() {
		return "HerramientasII/paneles";
	}

	@GetMapping("/HerramientasII/polimorfismo")
	public String polimorfismo() {
		return "HerramientasII/polimorfismo";
	}

	@GetMapping("/HerramientasII/saberesh")
	public String saberesh() {
		return "HerramientasII/saberesh";
	}

	@GetMapping("/HerramientasII/talleresh")
	public String talleresh() {
		return "HerramientasII/talleresh";
	}

	@GetMapping("/HerramientasII/crud")
	public String crud() {
		return "HerramientasII/crud";
	}

	@GetMapping("/HerramientasII/conexion")
	public String conexion() {
		return "HerramientasII/conexion";
	}

	/*HerramientasII*/


	/*Machine Learning*/
	@GetMapping("/Mlearning/ciclovida")
	public String ciclovida() {
		return "Mlearning/ciclovida";
	}

	@GetMapping("/Mlearning/pybasico")
	public String pybasico() {
		return "Mlearning/pybasico";
	}

	@GetMapping("/Mlearning/numpy")
	public String numpy() {
		return "Mlearning/numpy";
	}

	@GetMapping("/Mlearning/pandas")
	public String pandas() {
		return "Mlearning/pandas";
	}

	@GetMapping("/Mlearning/matplotlib")
	public String matplotlib() {
		return "Mlearning/matplotlib";
	}

	@GetMapping("/Mlearning/aprendizajesup")
	public String aprendizajesup() {
		return "Mlearning/aprendizajesup";
	}

	/*Machine Learning*/


	@PreAuthorize("hasRole('client')")
	@GetMapping("/easier/client")
	public String clientPage() {
		return "client";
	}
	
	@PreAuthorize("hasRole('admin')")
	@GetMapping("/easier/admin")
	public String adminPage() {
		return "admin";
	}
}

































