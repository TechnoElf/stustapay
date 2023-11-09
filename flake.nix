{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs {
        inherit system;
        overlays = [];
      };
    in with pkgs; {
      devShell = mkShell rec {
        buildInputs = [
          (python3.withPackages(ps: with ps; [
            fastapi
            python-multipart
            uvicorn
            pydantic
            passlib
            asyncpg
            pyyaml
            python-jose
            jinja2
            aiohttp
            pylatexenc
            schwifty
            sepaxml
          ]))
          nodejs
        ];
      };

      packages.default = mkDerivation {};
    }
  );
}
