function menu(){
    document.getElementById("mimenu").innerHTML="\n" +
        "<div class=\"row\" >\n" +
        "    <div class=\"col-sm\">\n" +
        "        <div class=\"card\">\n" +
        "            <div class=\"embed-responsive embed-responsive-21by9\">\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPJ\" aria-expanded=\"false\" aria-controls=\"collPJ\">\n" +
        "                        <div id=\"progra\" onload=\"imag()\"></div>\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <!--\n" +
        "                <img  class=\"card-img-top embed-responsive-item\"  src=\"/images/prog.jpg\" alt=\"...\" style=\"width: 100%\">-->\n" +
        "                <h5 class=\"card-title\">Lenguajes de Programación</h5>\n" +
        "                <p class=\"card-text\">Programación para el desarrollo de competencias en aplicaciones de escritorio y aplicaciones web.</p>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <!--Programación-->\n" +
        "\n" +
        "        <div class=\"collapse\" id=\"collPJ\">\n" +
        "            <div class=\"card card-body\">\n" +
        "                <!--Programación Java-->\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPJ1\" aria-expanded=\"false\" aria-controls=\"collPJ1\">\n" +
        "                        Programación con Java\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collPJ1\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPJA\" aria-expanded=\"false\" aria-controls=\"collPJA\">\n" +
        "                                Programación Java Básico\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collPJA\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPJB\" aria-expanded=\"false\" aria-controls=\"collPJB\">\n" +
        "                                Programación Java Forms\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collPJB\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <a href=\"/HerramientasII/saberesh\">Saberes previos</a>\n" +
        "                                <a href=\"/HerramientasII/objetosh\">Programación Orientada a Objetos</a>\n" +
        "                                <a href=\"/HerramientasII/atributosh\">Atributos, Métodos y Modificadores</a>\n" +
        "                                <a href=\"/HerramientasII/herencia\">Herencia</a>\n" +
        "                                <a href=\"/HerramientasII/polimorfismo\">Polimorfismo</a>\n" +
        "                                <a href=\"/HerramientasII/interfaces\">Interfaces</a>\n" +
        "                                <a href=\"/HerramientasII/calculadorajava\">Java Forms</a>\n" +
        "                                <a href=\"/HerramientasII/crud\">Ejemplo de CRUD con datos en memoria</a>\n" +
        "                                <a href=\"/HerramientasII/comunicajava\">Comunicación entre formularios y password</a>\n" +
        "                                <a href=\"/HerramientasII/paneles\">Páneles y Eventos</a>\n" +
        "                                <a href=\"/HerramientasII/miscelaneos\">Miscelaneos</a>\n" +
        "                                <a href=\"/HerramientasII/conexion\">Bases de Datos</a>\n" +
        "                                <a href=\"/HerramientasII/talleresh\">Talleres</a>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!--/Programación Java-->\n" +
        "\n" +
        "\n" +
        "                <!--Programación SQL-->\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collSQ\" aria-expanded=\"false\" aria-controls=\"collSQ\">\n" +
        "                        Programación con SQL\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collSQ\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collSQA\" aria-expanded=\"false\" aria-controls=\"collSQA\">\n" +
        "                                El Modelo Relacional\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collSQA\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <a href=\"/Basedatosuno/dbms\">Configuración del DBMS y el SSMS</a>\n" +
        "                                <a href=\"/Basedatosuno/modelo\">El modelo relacional</a>\n" +
        "                                <a href=\"/Basedatosuno/tablas\">Formulación de consultas con SQL</a>\n" +
        "                                <a href=\"/Basedatosuno/datos\">El lenguaje de definición de datos (DDL)</a>\n" +
        "                                <a href=\"/Basedatosuno/resumen\">Resumen de tablas con GROUP BY y HAVING</a>\n" +
        "                                <a href=\"/Basedatosuno/evaluacion\">Proceso de evaluación conceptual para las sentencias SELECT</a>\n" +
        "                                <a href=\"/Basedatosuno/conjuntos\">Conjuntos</a>\n" +
        "                                <a href=\"/Basedatosuno/taller\">Taller</a>\n" +
        "                                <a href=\"/Basedatosuno/miguia\">Guía MySql</a>\n" +
        "                                <a href=\"/Basedatosuno/vistas\">Vistas</a>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collSQB\" aria-expanded=\"false\" aria-controls=\"collSQB\">\n" +
        "                                Programación TRANSACT-SQL\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collSQB\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <a href=\"/Basedatdos/saberesii\">Revisando saberes</a>\n" +
        "                                <a href=\"/Basedatdos/vistasii\">Vistas</a>\n" +
        "                                <a href=\"/Basedatdos/funciones\">Funciones Escalares</a>\n" +
        "                                <a href=\"/Basedatdos/multisentencia\">Funciones de Tabla Multisentencia</a>\n" +
        "                                <a href=\"/Basedatdos/linea\">Funciones de Tabla en Línea</a>\n" +
        "                                <a href=\"/Basedatdos/procedimientos\">Procedimientos Almacenados</a>\n" +
        "                                <a href=\"/Basedatdos/esquemas\">Creación de Esquemas en SQL Server</a>\n" +
        "                                <a href=\"/Basedatdos/flujo\">Herramientas de Control de Flujo/a>\n" +
        "                                <a href=\"/Basedatdos/errores\">Control de Errores en TRANSACT-SQL</a>\n" +
        "                                <a href=\"/Basedatdos/triggers\">Triggers en TRANSACT-SQL</a>\n" +
        "                                <a href=\"/Basedatdos/cursores\">Cursores en TRANSACT-SQL</a>\n" +
        "                                <a href=\"/Basedatdos/transacciones\">Manejo de Transacciones</a>\n" +
        "                                <a href=\"/Basedatdos/postgresql\">PostgreSQL</a>\n" +
        "                                <a href=\"/Basedatdos/oracle\">Oracle</a>\n" +
        "                                <a href=\"/Basedatdos/biblio\">Bibliografía</a>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collSQC\" aria-expanded=\"false\" aria-controls=\"collSQC\">\n" +
        "                                Mongo DB\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collSQC\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collSQD\" aria-expanded=\"false\" aria-controls=\"collSQD\">\n" +
        "                                PostgreSql\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collSQD\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collSQE\" aria-expanded=\"false\" aria-controls=\"collSQE\">\n" +
        "                                Oracle\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collSQE\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!--/Programación SQL-->\n" +
        "\n" +
        "                <!--Programación Javascript-->\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collJS\" aria-expanded=\"false\" aria-controls=\"collJS\">\n" +
        "                        Programación con Javascript\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collJS\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collJSA\" aria-expanded=\"false\" aria-controls=\"collJSA\">\n" +
        "                                Javascript Básico\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collJSA\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collJSB\" aria-expanded=\"false\" aria-controls=\"collJSB\">\n" +
        "                                Javascript Avanzado\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collJSB\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!--/Programación Javascript-->\n" +
        "\n" +
        "                <!--Programación C-->\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPC\" aria-expanded=\"false\" aria-controls=\"collPC\">\n" +
        "                        Programación con C\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collPC\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPCA\" aria-expanded=\"false\" aria-controls=\"collPCA\">\n" +
        "                                Programación C puro\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collPCA\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPCB\" aria-expanded=\"false\" aria-controls=\"collPCB\">\n" +
        "                                Programación C++\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collPCB\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPCC\" aria-expanded=\"false\" aria-controls=\"collPCC\">\n" +
        "                                Programación C#\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collPCC\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collPCD\" aria-expanded=\"false\" aria-controls=\"collPCD\">\n" +
        "                                Programación Visual C++\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collPCD\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!--/Programación C-->\n" +
        "                <!--Aplicaciones Móviles-->\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAM\" aria-expanded=\"false\" aria-controls=\"collAM\">\n" +
        "                        Desarrollo de Aplicaciones Móviles\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collAM\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAMA\" aria-expanded=\"false\" aria-controls=\"collAMA\">\n" +
        "                                Desarrollo con Java\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collAMA\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAMB\" aria-expanded=\"false\" aria-controls=\"collAMB\">\n" +
        "                                Desarrollo con Kotlin\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collAMB\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!--/Aplicaciones Móviles-->\n" +
        "                <!--Simulación Estocástica-->\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collES\" aria-expanded=\"false\" aria-controls=\"collES\">\n" +
        "                        Simulación Estocástica\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collES\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collESA\" aria-expanded=\"false\" aria-controls=\"collESA\">\n" +
        "                                Procesos Markovianos\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collESA\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collESB\" aria-expanded=\"false\" aria-controls=\"collESB\">\n" +
        "                                Teoría de Colas\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collESB\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!--/Simulación Estocástica-->\n" +
        "\n" +
        "                <!--Autómatas-->\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAU\" aria-expanded=\"false\" aria-controls=\"collAU\">\n" +
        "                        Teoría de Lenguajes\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collAU\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAUA\" aria-expanded=\"false\" aria-controls=\"collAUA\">\n" +
        "                                Aritmética de Cadenas\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collAUA\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <a href=\"/Automatas/saberes\">Saberes previos</a>\n" +
        "                                <a href=\"/Automatas/cadena\">Alfabetos y Lenguajes</a>\n" +
        "                                <a href=\"/Automatas/lenguajes\">Lenguajes y Expresiones Regulares</a>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAUB\" aria-expanded=\"false\" aria-controls=\"collAUB\">\n" +
        "                                Autómatas\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collAUB\">\n" +
        "                            <ol type=\"1\">\n" +
        "                                <li><a href=\"/Automatas/aufindetermin\">Autómatas Finitos Deterministas</a></li>\n" +
        "                                <li><a href=\"/Automatas/aufinnoder\">Autómatas Finitos No Deterministas</a></li>\n" +
        "                                <li><a href=\"/Automatas/transiciones\">Autómatas con transiciones λ</a></li>\n" +
        "                            </ol>\n" +
        "\n" +
        "\n" +
        "\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAUC\" aria-expanded=\"false\" aria-controls=\"collAUC\">\n" +
        "                                Gramáticas\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collAUC\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <a href=\"/Automatas/regulares\">Gramáticas Regulares</a>\n" +
        "                                <a href=\"/Automatas/gic\">Gramáticas Independientes del Contexto</a>\n" +
        "                                <a href=\"/Automatas/pila\">Autómatas de pila</a>\n" +
        "                                <a href=\"/Automatas/arbol\">Árboles de derivación y análisis sintáctico</a>\n" +
        "                                <a href=\"/Automatas/atributo\">Gramáticas con atributos</a>\n" +
        "                                <a href=\"/Automatas/contexto\">Simplificación de gramáticas GIC</a>\n" +
        "                                <a href=\"/Automatas/chomsky\">Forma Normal de Chomsky</a>\n" +
        "                                <a href=\"/Automatas/greibach\">Forma Normal de Greibach</a>\n" +
        "                                <a href=\"/Automatas/descendente\">Reconocimiento Descendente</a>\n" +
        "                                <a href=\"/Automatas/ascendente\">Reconocimiento Ascendente</a>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAUD\" aria-expanded=\"false\" aria-controls=\"collAUD\">\n" +
        "                                Máquinas de Turing\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collAUD\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAUE\" aria-expanded=\"false\" aria-controls=\"collAUE\">\n" +
        "                                Talleres\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collAUE\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <a href=\"/Automatas/talleres\">Talleres</a>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collAUF\" aria-expanded=\"false\" aria-controls=\"collAUF\">\n" +
        "                                Laboratorios\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collAUF\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <a href=\"/Automatas/laboratorios\">Laboratorios</a>\n" +
        "                            </div>\n" +
        "\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!--/Autómatas-->\n" +
        "\n" +
        "\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!--/Programación-->\n" +
        "    <!--Automatización-->\n" +
        "    <div class=\"col-sm\">\n" +
        "        <div class=\"card\">\n" +
        "            <div class=\"embed-responsive embed-responsive-21by9\">\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collB\" aria-expanded=\"false\" aria-controls=\"collB\">\n" +
        "                        <div id=\"autom\" onload=\"imag()\"></div>\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <h5 class=\"card-title\">Automatización Industrial</h5>\n" +
        "                <p class=\"card-text\">Algoritmos para programación de sistemas SCADA, control clásico y control inteligente.</p>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"collapse\" id=\"collB\">\n" +
        "            <div class=\"card card-body\">\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collB1\" aria-expanded=\"false\" aria-controls=\"collB1\">\n" +
        "                        Button with data-bs-target\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collB1\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collBB\" aria-expanded=\"false\" aria-controls=\"collBB\">\n" +
        "                                Programación\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collBB\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <p>\n" +
        "                                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collBB1\" aria-expanded=\"false\" aria-controls=\"collBB1\">\n" +
        "                                        Button with data-bs-target\n" +
        "                                    </button>\n" +
        "                                </p>\n" +
        "                                <div class=\"collapse\" id=\"collBB1\">\n" +
        "                                    <div class=\"card card-body\">\n" +
        "                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <p>\n" +
        "                                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collBB2\" aria-expanded=\"false\" aria-controls=\"collBB2\">\n" +
        "                                        Button with data-bs-target\n" +
        "                                    </button>\n" +
        "                                </p>\n" +
        "                                <div class=\"collapse\" id=\"collBB2\">\n" +
        "                                    <div class=\"card card-body\">\n" +
        "                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "\n" +
        "\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collB2\" aria-expanded=\"false\" aria-controls=\"collB2\">\n" +
        "                        Button with data-bs-target\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collB2\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!--/Automatización-->\n" +
        "\n" +
        "    <!--Inteligencia Artificial-->\n" +
        "    <div class=\"col-sm\">\n" +
        "        <div class=\"card\">\n" +
        "            <div class=\"embed-responsive embed-responsive-21by9\">\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collC\" aria-expanded=\"false\" aria-controls=\"collC\">\n" +
        "                        <div id=\"inteli\" onload=\"imag()\"></div>\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "\n" +
        "                <h5 class=\"card-title\">Inteligencia Artificial</h5>\n" +
        "                <p class=\"card-text\">Aprendizaje de máquina con algoritmos estadísticos, de análisis numérico y redes neuronales artificiales.</p>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"collapse\" id=\"collC\">\n" +
        "            <div class=\"card card-body\">\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collC1\" aria-expanded=\"false\" aria-controls=\"collC1\">\n" +
        "                        Button with data-bs-target\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collC1\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "\n" +
        "\n" +
        "                        <p>\n" +
        "                            <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collCC\" aria-expanded=\"false\" aria-controls=\"collCC\">\n" +
        "                                Programación\n" +
        "                            </button>\n" +
        "                        </p>\n" +
        "                        <div class=\"collapse\" id=\"collCC\">\n" +
        "                            <div class=\"card card-body\">\n" +
        "                                <p>\n" +
        "                                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collCC1\" aria-expanded=\"false\" aria-controls=\"collCC1\">\n" +
        "                                        Button with data-bs-target\n" +
        "                                    </button>\n" +
        "                                </p>\n" +
        "                                <div class=\"collapse\" id=\"collCC1\">\n" +
        "                                    <div class=\"card card-body\">\n" +
        "                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <p>\n" +
        "                                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collCC2\" aria-expanded=\"false\" aria-controls=\"collCC2\">\n" +
        "                                        Button with data-bs-target\n" +
        "                                    </button>\n" +
        "                                </p>\n" +
        "                                <div class=\"collapse\" id=\"collCC2\">\n" +
        "                                    <div class=\"card card-body\">\n" +
        "                                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "\n" +
        "\n" +
        "\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "\n" +
        "                <p>\n" +
        "                    <button class=\"btn btn-light\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collC2\" aria-expanded=\"false\" aria-controls=\"collC2\">\n" +
        "                        Button with data-bs-target\n" +
        "                    </button>\n" +
        "                </p>\n" +
        "                <div class=\"collapse\" id=\"collC2\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!--/Inteligencia Artificial-->\n" +
        "</div>" +
        "    <!--/Inteligencia Artificial-->\n" +
        "</div>";
}
menu();

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
    collapseEl.addEventListener('hidden.bs.collapse', function () {
        let children = this.querySelectorAll('.collapse.show');
        children.forEach((c)=>{
            var collapse = bootstrap.Collapse.getInstance(c)
            collapse.hide()
        })
    })
})

function imag(){
    //console.log("El script se está ejecutando correctamente");
    // Seleccionamos el contenedor donde se mostrará la imagen
    const contenedor1 = document.getElementById("progra");
    const contenedor2 = document.getElementById("autom");
    const contenedor3 = document.getElementById("inteli");
    const contenedor4 = document.getElementById("logo");
    const contenedor5 = document.getElementById("logpost");

// Creamos un nuevo elemento <img>
    const imagen1 = document.createElement("img");
    const imagen2 = document.createElement("img");
    const imagen3 = document.createElement("img");
    const imagen4 = document.createElement("img");
    const imagen5 = document.createElement("img");
    const anchoDOM = document.documentElement.clientWidth; // Ancho del viewport
    const altoDOM = document.documentElement.clientHeight;

// Asignamos la ruta de la imagen (asegúrate de que la imagen esté en la misma carpeta o ajusta la ruta)
    imagen1.src = "/images/prog.jpg";
    imagen2.src = "/images/auto.jpg";
    imagen3.src = "/images/machine.jpg";
    imagen4.src = "/images/logo.jpg";
    imagen5.src = "/images/logo.jpg";

// Agregamos atributos opcionales
    imagen1.alt = "Descripción de la imagen";
    imagen1.style.width = (anchoDOM * 0.25) + "px";
    imagen1.style.height = (altoDOM * 0.30) + "px"; // 50% del alto del viewport
    imagen2.alt = "Descripción de la imagen";
    imagen2.style.width = (anchoDOM * 0.25) + "px";
    imagen2.style.height = (altoDOM * 0.30) + "px"; // 50% del alto del viewport
    imagen3.alt = "Descripción de la imagen";
    imagen3.style.width = (anchoDOM * 0.25) + "px";
    imagen3.style.height = (altoDOM * 0.30) + "px"; // 50% del alto del viewport
    imagen4.style.width = (anchoDOM * 0.03) + "px";
    imagen4.style.height = (altoDOM * 0.05) + "px"; // 50% del alto del viewport
    imagen5.style.width = (anchoDOM * 0.03) + "px";
    imagen5.style.height = (altoDOM * 0.05) + "px"; // 50% del alto del viewport

// Insertamos la imagen en el contenedor
    contenedor1.appendChild(imagen1);
    contenedor2.appendChild(imagen2);
    contenedor3.appendChild(imagen3);
    contenedor4.appendChild(imagen4);
    contenedor5.appendChild(imagen5);
}
imag();



//Ingeniería de software

var cont_1 = 0;
var cont_2 = 0;
//document.getElementById("disp3").innerHTML = "0";

function refrescar() {
    cont_1 = 0;
    cont_2 = 0;
    document.getElementById("disp1").innerHTML = "";
    document.getElementById("disp2").innerHTML = "";
    //document.getElementById("disp3").innerHTML = "0";
}

function score(){
    document.getElementById("disp3").innerHTML = ''//cont_1.toString();
}

function saludo() {
    ///////////////////////////////////////////////////////////////
    if (document.getElementById('rdplan1').checked ||
        document.getElementById('rdplan2').checked ||
        document.getElementById('rdplan3').checked ||
        document.getElementById('rdplan4').checked ||
        document.getElementById('rdplan5').checked ||
        document.getElementById('rdplan6').checked ||
        document.getElementById('rbplan1').checked ||
        document.getElementById('rbplan2').checked ||
        document.getElementById('rbplan3').checked ||
        document.getElementById('rbplan4').checked ||
        document.getElementById('rbplan5').checked ||
        document.getElementById('rbplan6').checked
    ) { cont_2++
    }

    if (document.getElementById('rbplan1').checked&&document.getElementById('rdplan5').checked||
        document.getElementById('rbplan6').checked&&document.getElementById('rdplan1').checked||
        document.getElementById('rbplan5').checked&&document.getElementById('rdplan6').checked||
        document.getElementById('rbplan2').checked&&document.getElementById('rdplan4').checked||
        document.getElementById('rbplan4').checked&&document.getElementById('rdplan2').checked||
        document.getElementById('rbplan3').checked&&document.getElementById('rdplan3').checked)
    { cont_1++;score() }

    if (cont_1 == 6&&cont_2 == 12) {
        document.getElementById("disp3").innerHTML = "";
        document.getElementById("disp2").innerHTML = "¡¡Excelente!! lo lograste.";
        document.getElementById("val_uno").value = cont_1.toString();
        cont_1 = 0
        cont_2 = 0
    }else{}


    if (cont_2 == 12 && cont_1 != 6) {
        document.getElementById("disp3").innerHTML = "";
        document.getElementById("disp1").innerHTML = "¡¡Fallaste!! vuelve a intentarlo.";
        cont_1 = 0
        cont_2 = 0
    }else{}
}
//Ingeniería de software


function mycards(){
    document.getElementById("mcards").innerHTML="\n" +
        "<div class=\"card-group\">\n" +
        "    <div class=\"card\">\n" +
        "        <div id=\"progra\" onload=\"imag()\"></div>\n" +
        "        <div class=\"card-body\">\n" +
        "            <h5 class=\"card-title\">Card title</h5>\n" +
        "            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n" +
        "            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"card\">\n" +
        "        <img src=\"...\" class=\"card-img-top\" alt=\"...\">\n" +
        "        <div class=\"card-body\">\n" +
        "            <h5 class=\"card-title\">Card title</h5>\n" +
        "            <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n" +
        "            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"card\">\n" +
        "        <img src=\"...\" class=\"card-img-top\" alt=\"...\">\n" +
        "        <div class=\"card-body\">\n" +
        "            <h5 class=\"card-title\">Card title</h5>\n" +
        "            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n" +
        "            <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" }

mycards();



