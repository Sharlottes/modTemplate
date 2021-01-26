Events.on(ClientLoadEvent, () => {
    const tantrosia = new Planet("tantrosia", sirius, 4, 0.8); //planet has sector
    tantrosia.localizedName = "Tantrosia";
    tantrosia.generator = new TantrosPlanetGenerator();
    tantrosia.mesh = new HexMesh(tantrosia, 8);

    //orbit&rotate option
    tantrosia.orbitRadius = 4;
    tantrosia.orbitTime = 1.5 * 60;
    tantrosia.rotateTime = 60;

    //atmosphere option
    tantrosia.hasAtmosphere = true;
    tantrosia.atmosphereColor = Liquids.water.color.cpy().mul(Pal.lancerLaser);
    tantrosia.atmosphereRadIn = 0.075;
    tantrosia.atmosphereRadOut = 0.3;

    cornal.bloom = true;
    cornal.accessible = true;

    const sector = new SectorPreset("basic_attack_0.1v", tantrosia, 2);
    sector.localizedName = "Basic Attack";
    sector.difficulty = 8;
    sector.alwaysUnlocked = true;

    const sirius = new Planet("sirius", Planets.sun, 0, 0.5); //sun doesn't have sector
    sirius.localizedName = "Sirius";
    //sun doesn't need generator because sun doesn't have sector.
    sirius.mesh = new SunMesh(
        sirius, 4,
        5, 0.3, 1.7, 1.2, 1,
        1.3,
        Pal.lancerLaser,
        Pal.lancerLaser.cpy().lerp(Color.white, 0.2),
        Pal.lancerLaser.cpy().lerp(Color.white, 0.4),
        Pal.lancerLaser.cpy().lerp(Color.white, 0.6),
        Pal.lancerLaser.cpy().lerp(Color.white, 0.8),
        Color.white
    );

    //orbit&rotate option
    sirius.orbitRadius = 8;
    sirius.orbitTime = 60;
    sirius.rotateTime = 30;

    //atmosphere option
    sirius.hasAtmosphere = true;
    sirius.atmosphereColor = Pal.lancerLaser;
    sirius.atmosphereRadIn = 0.05;
    sirius.atmosphereRadOut = 0.3;

    sirius.bloom = true;
    sirius.accessible = true;
});
