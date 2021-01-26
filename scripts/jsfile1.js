const block = extend(Wall, "h", {});
const blockEntity = extend(Wall.WallBuild, block, {});
block.buildType = blockEntity;

const item = extend(Item, "hium", {});

const liquid = extend(Liquid, "hquid", {});

const unit = extend(UnitType, "hnit", {});
const unitEntity = () => extend(MechUnit, {});
unit.constructor = unitEntity;



const bullet = new MissileBulletType(3, 35);
bullet.lifetime = 60;

const statusEffect = new StatusEffect("moreBurning");
statusEffect.color = Pal.lightFlame;
statusEffect.damage = 0.3;
statusEffect.effect = Fx.burning;



const fx = new Effect(60, e=> {
  Draw.color(Pal.heal);
  Lines.stroke(1.5);
  Lines.circle(e.x, e.y, 2 * e.fslope() * Vars.tilesize);
})
