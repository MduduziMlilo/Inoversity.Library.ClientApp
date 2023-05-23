FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["InoversityLibrary.Admin.WebPortal/InoversityLibrary.Admin.WebPortal.csproj", "InoversityLibrary.Admin.WebPortal/"]
RUN dotnet restore "InoversityLibrary.Admin.WebPortal/InoversityLibrary.Admin.WebPortal.csproj"
COPY . .
WORKDIR "/src/InoversityLibrary.Admin.WebPortal"
RUN dotnet build "InoversityLibrary.Admin.WebPortal.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "InoversityLibrary.Admin.WebPortal.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "InoversityLibrary.Admin.WebPortal.dll"]
