FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/automaticaycontrol-0.0.1.jar
COPY ${JAR_FILE} automaticaycontrol.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "automaticaycontrol.jar"]