namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public class ConjuredQualityUpdater : CommonObjectQualityUpdaterBase
    {
        public ConjuredQualityUpdater(Item item) : base(item)
        {
        }

        protected override void CustomUpdate()
        {
            if (Item.SellIn < 0)
            {
                Item.Quality -= 2;
            }
            else
            {
                Item.Quality -= 1;
            }
        }
    }
}