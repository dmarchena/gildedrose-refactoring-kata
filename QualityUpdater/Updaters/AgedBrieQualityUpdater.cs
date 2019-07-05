namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public class AgedBrieQualityUpdater : CommonObjectQualityUpdaterBase
    {
        public AgedBrieQualityUpdater(Item item) : base(item)
        {
        }

        protected override void CustomUpdate()
        {
            ClassicalQualityUpdate();

            if (Item.Quality < 50 && Item.SellIn < 0)
            {
                Item.Quality += 1;
            }
        }
    }
}