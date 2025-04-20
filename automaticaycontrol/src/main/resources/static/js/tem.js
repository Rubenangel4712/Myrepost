\n" +
"<div class=\"card-group\">\n" +
"  <div class=\"card\">\n" +
"    <img src=\"...\" class=\"card-img-top\" alt=\"...\">\n" +
"    <div class=\"card-body\">\n" +
"      <h5 class=\"card-title\">Card title</h5>\n" +
"      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n" +
"      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n" +
"    </div>\n" +
"  </div>\n" +
"  <div class=\"card\">\n" +
"    <img src=\"...\" class=\"card-img-top\" alt=\"...\">\n" +
"    <div class=\"card-body\">\n" +
"      <h5 class=\"card-title\">Card title</h5>\n" +
"      <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n" +
"      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n" +
"    </div>\n" +
"  </div>\n" +
"  <div class=\"card\">\n" +
"    <img src=\"...\" class=\"card-img-top\" alt=\"...\">\n" +
"    <div class=\"card-body\">\n" +
"      <h5 class=\"card-title\">Card title</h5>\n" +
"      <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n" +
"      <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n" +
"    </div>\n" +
"  </div>\n" +
"</div>\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"<div class=\"container\">\n" +
"  <nav class=\"navbar navbar-expand-lg bg-body-secondary border-bottom\">\n" +
"    <div class=\"container\">\n" +
"      <a class=\"navbar-brand\" href=\"/\" style=\"color: black\">Easiercomp</a>\n" +
"      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
"        <span class=\"navbar-toggler-icon\"></span>\n" +
"      </button>\n" +
"      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
"        <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n" +
"          <li class=\"nav-item\">\n" +
"            <a class=\"nav-link text-dark\" href=\"/\">Home</a>\n" +
"          </li>\n" +
"          <li class=\"nav-item\">\n" +
"            <a class=\"nav-link text-dark\" href=\"/contact\">Contact</a>\n" +
"          </li>\n" +
"        </ul>\n" +
"        <ul class=\"navbar-nav me-3\" sec:authorize=\"hasRole('admin')\">\n" +
"          <li class=\"nav-item dropdown\">\n" +
"            <a class=\"nav-link dropdown-toggle text-dark\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
"              Admin\n" +
"            </a>\n" +
"            <ul class=\"dropdown-menu\">\n" +
"              <li><a class=\"dropdown-item\" href=\"/profile\">Profile</a></li>\n" +
"              <li><a class=\"dropdown-item\" href=\"/\">Home</a></li>\n" +
"            </ul>\n" +
"          </li>\n" +
"        </ul>\n" +
"\n" +
"\n" +
"        <ul class=\"navbar-nav me-3\" sec:authorize=\"hasRole('client')\">\n" +
"          <li class=\"nav-item dropdown\">\n" +
"            <a class=\"nav-link dropdown-toggle text-dark\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
"              Client\n" +
"            </a>\n" +
"            <ul class=\"dropdown-menu\">\n" +
"              <li><a class=\"dropdown-item\" href=\"/profile\">Profile</a></li>\n" +
"              <li><a class=\"dropdown-item\" href=\"/\">Home</a></li>\n" +
"            </ul>\n" +
"          </li>\n" +
"        </ul>\n" +
"\n" +
"        <form sec:authorize=\"isAuthenticated()\" method=\"post\" action=\"/logout\">\n" +
"          <input type=\"hidden\" th:name=\"${_csrf.parameterName}\"\n" +
"                 th:value=\"${_csrf.token}\" />\n" +
"\n" +
"          <button type=\"submit\" class=\"btn btn-danger\">\n" +
"            Logout\n" +
"          </button>\n" +
"        </form>\n" +
"\n" +
"        <ul class=\"navbar-nav\" sec:authorize=\"!isAuthenticated()\">\n" +
"          <li class=\"nav-item\">\n" +
"            <a href=\"/register\" class=\"btn btn-outline-primary me-2\">Register</a>\n" +
"          </li>\n" +
"          <li class=\"nav-item\">\n" +
"            <a href=\"/login\" class=\"btn btn-primary\">Login</a>\n" +
"          </li>\n" +
"        </ul>\n" +
"      </div>\n" +
"    </div>\n" +
"  </nav>\n" +
"  <!--body-->\n" +
"  <div class=\"table-responsive bg-body-secondary\">\n" +
"    <table class=\"table align-middle bg-body-secondary\">\n" +
"      <tbody>\n" +
"      <tr>\n" +
"        <td style=\"width: 30%\">\n" +
"          <!-- menú.js-->\n" +
"          <div class=\"card\">\n" +
"            <div class=\"card-body bg-body-secondary\">\n" +
"              <div id=\"progra\" onload=\"imag()\">\n" +
"              </div>\n" +
"\n" +
"              <h5 class=\"card-title bg-body-secondary\" >Programación</h5>\n" +
"              <div class=\"accordion\" id=\"accordionExample\">\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"heading1\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse1\" aria-expanded=\"false\" aria-controls=\"collapse1\"> Programación Java </button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapse1\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading1\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree11\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree11\" aria-expanded=\"false\" aria-controls=\"cThree11\"> Programación Java Básico </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree11\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree11\">\n" +
"                          <a href=\"/\"><strong>Java Básico</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree12\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree12\" aria-expanded=\"false\" aria-controls=\"cThree12\"> Programación Java Forms </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree12\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree12\">\n" +
"                          <a href=\"/HerramientasII/saberesh\"><strong>Saberes previos</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/objetosh\"><strong>Programación Orientada a Objetos</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/atributosh\"><strong>Atributos, Métodos y Modificadores</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/herencia\"><strong>Herencia</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/polimorfismo\"><strong>Polimorfismo</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/interfaces\"><strong>Interfaces</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/calculadorajava\"><strong>Java Forms</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/crud\"><strong>Ejemplo de CRUD con datos en memoria</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/comunicajava\"><strong>Comunicación entre formularios y password</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/paneles\"><strong>Páneles y Eventos</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/miscelaneos\"><strong>Miscelaneos</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/conexion\"><strong>Bases de Datos</strong></a><br><br>\n" +
"                          <a href=\"/HerramientasII/talleresh\"><strong>Talleres</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"headingTwo1\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseTwo1\" aria-expanded=\"false\" aria-controls=\"collapseTwo1\"> Programación con SQL </button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapseTwo1\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo1\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree1\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree1\" aria-expanded=\"false\" aria-controls=\"cThree1\"> Bases de Datos I </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree1\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/modelo\"><strong>El modelo relacional</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/tablas\"><strong>Formulación de consultas con SQL</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/datos\"><strong>El lenguaje de definición de datos (DDL)</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/resumen\"><strong>Resumen de tablas con GROUP BY y HAVING</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/evaluacion\"><strong>Proceso de evaluación conceptual para las sentencias SELECT</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/conjuntos\"><strong>Conjuntos</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/taller\"><strong>Taller</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/miguia\"><strong>Guía MySql</strong></a><br><br>\n" +
"                          <a href=\"/Basedatosuno/vistas\"><strong>Vistas</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree2\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree2\" aria-expanded=\"false\" aria-controls=\"cThree2\"> Bases de Datos II </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree2\">\n" +
"                          <a href=\"/Basedatdos/saberesii\"><strong>Revisando saberes</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/vistasii\"><strong>Vistas</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/funciones\"><strong>Funciones Escalares</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/multisentencia\"><strong>Funciones de Tabla Multisentencia</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/linea\"><strong>Funciones de Tabla en Línea</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/procedimientos\"><strong>Procedimientos Almacenados</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/esquemas\"><strong>Creación de Esquemas en SQL Server</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/flujo\"><strong>Herramientas de Control de Flujo</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/errores\"><strong>Control de Errores en TRANSACT-SQL</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/triggers\"><strong>Triggers en TRANSACT-SQL</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/cursores\"><strong>Cursores en TRANSACT-SQL</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/transacciones\"><strong>Manejo de Transacciones</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/objetos\"><strong>Firebase y MongoDB</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/nosql\"><strong>PostgreSQL</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/oracle\"><strong>Oracle</strong></a><br><br>\n" +
"                            <a href=\"/Basedatdos/biblio\"><strong>Bibliografía</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"headingTwo\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\"> Programación con Javascript </button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapseTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreex\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreex\" aria-expanded=\"false\" aria-controls=\"cThreex\">Javascript Básico</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreex\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreex\">\n" +
"                          <a href=\"/\"><strong>Variables, ciclos iterativos, funciones y el DOM</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree\" aria-expanded=\"false\" aria-controls=\"cThree\">Javascript Avanzado</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree\">\n" +
"                          <a href=\"/\"><strong>Clases y eventos</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"heading4\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\"> Programación C </button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapse4\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo1\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree41\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree41\" aria-expanded=\"false\" aria-controls=\"cThree41\"> Programación C </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree41\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree1\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree42\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree42\" aria-expanded=\"false\" aria-controls=\"cThree42\"> Programación C# </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree42\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree42\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree43\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree43\" aria-expanded=\"false\" aria-controls=\"cThree43\"> Programación C++ </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree43\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree43\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree44\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree44\" aria-expanded=\"false\" aria-controls=\"cThree44\"> Programación Visual C++ </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree44\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree44\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"heading5\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse5\" aria-expanded=\"false\" aria-controls=\"collapse5\"> Aplicaciones Móviles </button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapse5\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading1\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree51\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree51\" aria-expanded=\"false\" aria-controls=\"cThree51\"> Desarrollo con Java </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree51\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree51\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThree52\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree52\" aria-expanded=\"false\" aria-controls=\"cThree52\"> Desarrollo con Kotlin </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThree52\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree52\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"headingg\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseg\" aria-expanded=\"false\" aria-controls=\"collapseg\">OpenGL</button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapseg\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingg\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreeg1\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreeg1\" aria-expanded=\"false\" aria-controls=\"cThreeg1\"> Desarrollo con Java </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreeg1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreeg1\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreeg2\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreeg2\" aria-expanded=\"false\" aria-controls=\"cThreeg2\"> Desarrollo con Kotlin </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreeg2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreeg2\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"headingk\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsek\" aria-expanded=\"false\" aria-controls=\"collapsek\">Simulación Estocástica</button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapsek\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingk\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreek1\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreek1\" aria-expanded=\"false\" aria-controls=\"cThreek1\">Procesos Markovianos</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreek1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreek1\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreek2\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreek2\" aria-expanded=\"false\" aria-controls=\"cThreek2\">Teoría de Colas</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreek2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreek2\">\n" +
"                          <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"headingm\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsem\" aria-expanded=\"false\" aria-controls=\"collapsem\">Teoría de Lenguajes</button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapsem\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingm\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreem1\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreem1\" aria-expanded=\"false\" aria-controls=\"cThreem1\">Matemática</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreem1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreem1\">\n" +
"                          <a href=\"/Automatas/saberes\"><strong>Saberes previos</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/cadena\"><strong>Alfabetos y Lenguajes</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/lenguajes\"><strong>Lenguajes y Expresiones Regulares</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreem2\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreem2\" aria-expanded=\"false\" aria-controls=\"cThreem2\">Autómatas</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreem2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreem2\">\n" +
"                          <a href=\"/Automatas/aufindeter\"><strong>Autómatas Finitos Deterministas</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/aufinnoder\"><strong>Autómatas Finitos No Deterministas</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/transiciones\"><strong>Autómatas con transiciones λ</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreem3\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreem3\" aria-expanded=\"false\" aria-controls=\"cThreem3\">Gramáticas</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreem3\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreem3\">\n" +
"                          <a href=\"/Automatas/regulares\"><strong>Gramáticas Regulares</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/gic\"><strong>Gramáticas Independientes del Contexto</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/pila\"><strong>Autómatas de pila</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/arbol\"><strong>Árboles de derivación y análisis sintáctico</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/atributo\"><strong>Gramáticas con atributos</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/contexto\"><strong>Simplificación de gramáticas GIC</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/chomsky\"><strong>Forma Normal de Chomsky</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/greibach\"><strong>Forma Normal de Greibach</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/descendente\"><strong>Reconocimiento Descendente</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/ascendente\"><strong>Reconocimiento Ascendente</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreem4\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreem4\" aria-expanded=\"false\" aria-controls=\"cThreem4\">Máquinas de Turing</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreem4\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreem4\">\n" +
"                          <a href=\"/Automatas/talleres\"><strong>Máquinas de Turing</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreem5\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreem5\" aria-expanded=\"false\" aria-controls=\"cThreem5\">Talleres y Laboratorios</button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreem5\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreem5\">\n" +
"                          <a href=\"/Automatas/talleres\"><strong>Talleres</strong></a><br><br>\n" +
"                          <a href=\"/Automatas/laboratorios\"><strong>Laboratorios</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"\n" +
"                <div class=\"accordion-item\">\n" +
"                  <h2 class=\"accordion-header\" id=\"headingl\">\n" +
"                    <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsel\" aria-expanded=\"false\" aria-controls=\"collapsel\">Programación Lineal</button>\n" +
"                  </h2>\n" +
"                  <div id=\"collapsel\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingl\" data-bs-parent=\"#accordionExample\">\n" +
"                    <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreel1\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreel1\" aria-expanded=\"false\" aria-controls=\"cThreel1\"> Desarrollo con Java </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreel1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreel1\">\n" +
"                          <a href=\"/\"><strong>Desarrollo con Java</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                      <div class=\"accordion-item\">\n" +
"                        <h2 class=\"accordion-header\" id=\"hThreel2\">\n" +
"                          <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreel2\" aria-expanded=\"false\" aria-controls=\"cThreel2\"> Desarrollo con Kotlin </button>\n" +
"                        </h2>\n" +
"                        <div id=\"cThreel2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreel2\">\n" +
"                          <a href=\"/\"><strong>Desarrollo con Kotlin</strong></a><br><br>\n" +
"                        </div>\n" +
"                      </div>\n" +
"\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"                <div id=\"autom\" onload=\"imag()\"></div>\n" +
"                <h5 class=\"card-title\">Automatización</h5>\n" +
"\n" +
"                <div class=\"accordion\" id=\"accordionExample2\">\n" +
"\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"heading7\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse7\" aria-expanded=\"false\" aria-controls=\"collapse\"> Control </button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapse7\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading6\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThree71\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree71\" aria-expanded=\"false\" aria-controls=\"cThree71\"> Control Clásico </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThree71\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree71\">\n" +
"                            <a href=\"/\"><strong>Control Clásico</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThree72\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree72\" aria-expanded=\"false\" aria-controls=\"cThree72\"> Control Inteligente </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThree72\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree72\">\n" +
"                            <a href=\"/\"><strong>Control Inteligente</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThree73\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree73\" aria-expanded=\"false\" aria-controls=\"cThree73\"> Control Multivariado</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThree73\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree73\">\n" +
"                            <a href=\"/\"><strong>Control Multivariado</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headinga\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsea\" aria-expanded=\"false\" aria-controls=\"collapse\"> Redes Industriales </button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapsea\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading6\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreea1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreea1\" aria-expanded=\"false\" aria-controls=\"cThreea1\"> Control Clásico </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreea1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreea1\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreea2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreea2\" aria-expanded=\"false\" aria-controls=\"cThreea2\"> Control Inteligente </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreea2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreea2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headinb\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseb\" aria-expanded=\"false\" aria-controls=\"collapse\"> Robótica </button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapseb\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingb\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreeb1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreeb1\" aria-expanded=\"false\" aria-controls=\"cThreeb1\"> Control Clásico </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreeb1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreeb1\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreeb2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreeb2\" aria-expanded=\"false\" aria-controls=\"cThreeb2\"> Control Inteligente </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreeb2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreeb2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headinc\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsec\" aria-expanded=\"false\" aria-controls=\"collapse\">Procesamiento Digital de Señales</button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapsec\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingc\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreec1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreec1\" aria-expanded=\"false\" aria-controls=\"cThreec1\"> Control Clásico </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreec1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreec1\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreec2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreec2\" aria-expanded=\"false\" aria-controls=\"cThreec2\"> Control Inteligente </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreec2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreec2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headinf\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsef\" aria-expanded=\"false\" aria-controls=\"collapse\">Electrónica</button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapsef\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingf\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreef1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreef1\" aria-expanded=\"false\" aria-controls=\"cThreef1\">Electrónica Básica</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreef1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreef1\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreef2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreef2\" aria-expanded=\"false\" aria-controls=\"cThreef2\">Electrónica Industrial</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreef2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreef2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreef3\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreef3\" aria-expanded=\"false\" aria-controls=\"cThreef3\">Circuitos de Corriente Alterna</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreef3\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreef3\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreef4\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreef4\" aria-expanded=\"false\" aria-controls=\"cThreef4\">Sistemas de Potencia</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreef4\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreef4\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headingi\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsei\" aria-expanded=\"false\" aria-controls=\"collapse\">Física Dinámica</button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapsei\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingi\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreei1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreei1\" aria-expanded=\"false\" aria-controls=\"cThreei1\">Dinámica Básica</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreei1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreei1\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreei2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreei2\" aria-expanded=\"false\" aria-controls=\"cThreei2\">Dinámica de Cuerpos Rígidos</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreei2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreei2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"                </div>\n" +
"\n" +
"\n" +
"                <div id=\"inteli\" onload=\"imag()\"></div>\n" +
"                <h5 class=\"card-title\">Inteligencia Artificial</h5>\n" +
"\n" +
"                <div class=\"accordion\" id=\"accordionExample3\">\n" +
"\n" +
"\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headinga8\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsea8\" aria-expanded=\"false\" aria-controls=\"collapse\"> Ingeniería de Software </button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapsea8\" class=\"accordion-collapse collapse\" aria-labelledby=\"headinga8\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreea81\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreea81\" aria-expanded=\"false\" aria-controls=\"cThreea81\">Ciclo de vida del software</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreea81\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree81\">\n" +
"                            <a href=\"/Mlearning/ciclovida\"><strong>Ciclo de vida del software</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreea82\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreea82\" aria-expanded=\"false\" aria-controls=\"cThreea82\">Recavación de Requisitos</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreea82\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreea82\">\n" +
"                            <a href=\"/\"><strong>Recavación de Requisitos</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreea02\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreea02\" aria-expanded=\"false\" aria-controls=\"cThreea02\">Validación de Requisitos</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreea02\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreea02\">\n" +
"                            <a href=\"/\"><strong>Validación de Requisitos</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreea12\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreea12\" aria-expanded=\"false\" aria-controls=\"cThreea12\">Características Generales</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreea12\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreea12\">\n" +
"                            <a href=\"/\"><strong>Características Generales</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"heading8\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse8\" aria-expanded=\"false\" aria-controls=\"collapse\"> Programación Python </button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapse8\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading8\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThree81\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree81\" aria-expanded=\"false\" aria-controls=\"cThree81\">Python Básico </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThree81\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree81\">\n" +
"                            <a href=\"/Mlearning/pybasico\"><strong>Python Básico</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThree92\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree92\" aria-expanded=\"false\" aria-controls=\"cThree92\">Numpy</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThree92\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree92\">\n" +
"                            <a href=\"/Mlearning/numpy\"><strong>Numpy</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThree102\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree102\" aria-expanded=\"false\" aria-controls=\"cThree102\">Pandas</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThree102\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree102\">\n" +
"                            <a href=\"/Mlearning/pandas\"><strong>CPandas</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThree112\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThree112\" aria-expanded=\"false\" aria-controls=\"cThree112\">Matplotlib</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThree112\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThree112\">\n" +
"                            <a href=\"/Mlearning/matplotlib\"><strong>Matplotlib</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headind\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsed\" aria-expanded=\"false\" aria-controls=\"collapse\">Aprendizaje de Máquina</button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapsed\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingd\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreed1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreed1\" aria-expanded=\"false\" aria-controls=\"cThreed1\"> Aprendizaje Supervisado </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreed1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreed1\">\n" +
"                            <a href=\"/Mlearning/aprendizajesup\"><strong>Aprendizaje Supervisado</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreed2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreed2\" aria-expanded=\"false\" aria-controls=\"cThreed2\"> Aprendizaje no Supervisado </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreed2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreed2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Segmentación por promedios (Kmeans)</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreed3\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreed3\" aria-expanded=\"false\" aria-controls=\"cThreed3\"> Aprendizaje Reforzado </button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreed3\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreed3\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headingh\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseh\" aria-expanded=\"false\" aria-controls=\"collapseh\">Sistemas Expertos</button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapseh\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingh\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreeh1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreeh1\" aria-expanded=\"false\" aria-controls=\"cThreeh1\">Lógica clásica</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreeh1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreeh1\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreeh2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreeh2\" aria-expanded=\"false\" aria-controls=\"cThreeh2\">Lógica Difusa</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreeh2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreeh2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreeh3\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreeh3\" aria-expanded=\"false\" aria-controls=\"cThreeh3\">Redes Neuronales Artificiales</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreeh3\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreeh3\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headingn\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsen\" aria-expanded=\"false\" aria-controls=\"collapsen\">Animación Digital</button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapsen\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingn\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreen1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreen1\" aria-expanded=\"false\" aria-controls=\"cThreen1\">Animación con C# (Unity)</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreen1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreen1\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreen2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreen2\" aria-expanded=\"false\" aria-controls=\"cThreen2\">Animación con Python (Blender)</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreen2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreen2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreen3\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreen3\" aria-expanded=\"false\" aria-controls=\"cThreen3\">Animación con OpenGL</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreen3\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreen3\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"                  <div class=\"accordion-item\">\n" +
"                    <h2 class=\"accordion-header\" id=\"headingj\">\n" +
"                      <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapsej\" aria-expanded=\"false\" aria-controls=\"collapsej\">Matemática Computacional</button>\n" +
"                    </h2>\n" +
"                    <div id=\"collapsej\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingj\" data-bs-parent=\"#accordionExample\">\n" +
"                      <div class=\"accordion-body\">\n" +
"\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreej1\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreej1\" aria-expanded=\"false\" aria-controls=\"cThreej1\">Lógica clásica</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreej1\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreej1\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                        <div class=\"accordion-item\">\n" +
"                          <h2 class=\"accordion-header\" id=\"hThreej2\">\n" +
"                            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#cThreej2\" aria-expanded=\"false\" aria-controls=\"cThreej2\">Lógica Difusa</button>\n" +
"                          </h2>\n" +
"                          <div id=\"cThreej2\" class=\"accordion-collapse collapse\" aria-labelledby=\"hThreej2\">\n" +
"                            <a href=\"/Basedatosuno/dbms\"><strong>Configuración del DBMS y el SSMS</strong></a><br><br>\n" +
"                          </div>\n" +
"                        </div>\n" +
"\n" +
"                      </div>\n" +
"                    </div>\n" +
"                  </div>\n" +
"\n" +
"\n" +
"                </div>\n" +
"              </div>\n" +
"            </div>\n" +
"          </div>\n" +
"          <!-- menú.js-->\n" +
"\n" +
"        </td>\n" +
"        <td style=\"width: 70%\">\n" +
"        </td>\n" +
"      </tr>\n" +
"      </tbody>\n" +
"    </table>\n" +
"  </div>\n" +
"</div>