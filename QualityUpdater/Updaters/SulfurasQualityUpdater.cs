namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public class SulfurasQualityUpdater: LegendaryObjectQualityUpdaterBase
    {
        public SulfurasQualityUpdater(Item item): base(item)
        {
        }

        protected override void CustomUpdate()
        {
            ClassicalQualityUpdate();
        }
    }
}