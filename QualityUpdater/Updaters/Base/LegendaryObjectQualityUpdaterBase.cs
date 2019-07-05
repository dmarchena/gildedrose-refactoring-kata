namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public abstract class LegendaryObjectQualityUpdaterBase : QualityUpdaterBase
    {
        protected LegendaryObjectQualityUpdaterBase(Item item) : base(item)
        {
        }

        public override void Update()
        {
            CustomUpdate();
            KeepLimits();
        }
    }
}