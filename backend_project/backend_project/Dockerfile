FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy Maven wrapper + pom first (better caching)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Give execute permission
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src src

# Build the project
RUN ./mvnw clean package -DskipTests

# Expose Spring Boot port
EXPOSE 8080

# Run the jar
CMD ["java", "-jar", "target/configmanager-0.0.1-SNAPSHOT.jar"]