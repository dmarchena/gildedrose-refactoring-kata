namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public class BackstagePassesQualityUpdater : CommonObjectQualityUpdaterBase
    {
        public BackstagePassesQualityUpdater(Item item) : base(item)
        {
        }

        protected override void CustomUpdate()
        {
            if (Item.SellIn < 0)
            {
                Item.Quality = 0;
                return;
            }
            
            ClassicalQualityUpdate();

            if (Item.Quality >= 50)
            {
                return;
            }
            
            if (Item.SellIn < 10)
            {
                Item.Quality += 1;
            }

            if (Item.SellIn < 5)
            {
                Item.Quality += 1;
            }


        }
    }
}